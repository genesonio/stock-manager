'use server'

import { prisma } from '@/libs/prisma'

export async function getAllStock() {
    const stock = await prisma.stock.findMany()
    return stock
}
