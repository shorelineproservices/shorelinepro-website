import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const customerId = searchParams.get('customerId');

    const where: any = {};
    if (status) where.status = status;
    if (customerId) where.customerId = customerId;

    const jobs = await prisma.job.findMany({
      where,
      include: {
        customer: true,
        schedules: true,
        invoices: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(jobs);
  } catch (error) {
    console.error('Failed to fetch jobs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch jobs' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const job = await prisma.job.create({
      data: {
        title: body.title,
        description: body.description,
        customerId: body.customerId,
        jobType: body.jobType,
        address: body.address,
        city: body.city || 'Vancouver',
        state: body.state || 'WA',
        zipCode: body.zipCode,
        squareFeet: body.squareFeet,
        estimatedHours: body.estimatedHours,
        laborCost: body.laborCost,
        materialCost: body.materialCost,
        totalCost: body.totalCost,
        notes: body.notes,
      },
      include: {
        customer: true,
      },
    });
    return NextResponse.json(job, { status: 201 });
  } catch (error) {
    console.error('Failed to create job:', error);
    return NextResponse.json(
      { error: 'Failed to create job' },
      { status: 500 }
    );
  }
}
