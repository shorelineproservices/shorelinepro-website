# Imported Claude Code Local Memory

This file contains the raw local Claude Code memory we were able to retrieve from the machine.

## Source

- `.claude/projects/C--Users-EliteBook-CKalshiBot/memory/MEMORY.md`

## Imported content

# CKalshiBot Memory

## Architecture
- Single-file web dashboard: `web/index.html` (4 tabs: Dashboard, Charts, ML Intelligence, Settings)
- Backend: `src/main.py` → Flask on port 3001, trading loop on main thread
- Key modules: `trader.py`, `ml_engine.py`, `profit_optimizer.py`, `kalshi_api.py`, `market_data_streamer.py`

## Key Facts
- BANKROLL default: $10, TRADE_INTERVAL: 60s (config.py)
- Goal: $10 → $100,000 (6 growth phases)
- Growth phases: aggressive($10-100), growth($100-500), standard($500-2500), conservative($2500-10K), scaling($10K-50K), preservation($50K+)
- 4 strategies: news_sentiment, statistical_arbitrage, volatility_based, value_bias
- ML Engine: Online logistic regression, 12 features, 4 strategy IDs (normalized /3.0), edge tracker, regime detector, calibrator
- Orders: Limit orders only (Kalshi deprecated market orders). Paper trading by default, `live_trading` toggle in settings
- Market streamer: Fetches top 50 most liquid open markets (MIN_VOLUME=50), supports subpenny pricing, prefers ticker over id
- Kalshi fees: Taker=ceil(0.07*C*P*(1-P)), Maker=1/4 of that. Bot uses maker (limit) orders. Fee-aware position sizing in profit_optimizer
- All settings toggles wired in trader.py: ml_enabled, take_profit_enabled, correlation_filter_enabled, live_trading, value_bias_enabled
- Tests: 145 passing
- Position sizing uses round() not int() to avoid truncation
- RSA-PSS auth: salt_length=DIGEST_LENGTH, sign path without query params
- Fixed-point API: count_fp (string), yes_price_dollars (string), volume_fp, open_interest_fp
- Order book spread check before entry (skip >15% spread), price improvement at bid+1c
- Stale order cleanup every trading cycle (cancel resting orders >5min old)
- Live close orders submitted for both full and partial position exits

## Kalshi Platform Notes
- Sports = 80%+ volume, economics/politics also liquid
- SIG provides institutional liquidity on indices, econ, crypto, FX
- Contracts: binary yes/no, $0-$1, settle at $0 or $1
- 24/7 trading except Thu 3-5 AM ET maintenance
- March 2026: subpenny pricing, fractional trading, legacy price fields removed
- Favorite-longshot bias (CEPR Paper 20631): 5c contracts win ~2-4% (implied 5%), 95c contracts win ~98% (implied 95%)
- Average pre-fee return for contract buyers is -20%
- API: GET /series for category filtering, GET /markets?status=open&limit=100 for market discovery
- Series API: ticker, frequency, category, tags, settlement_sources
- API base: https://api.elections.kalshi.com/trade-api/v2
- Demo API: https://demo-api.kalshi.co/trade-api/v2
