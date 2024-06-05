/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Assignment as PrismaAssignment } from "@prisma/client";

export class AssignmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AssignmentCountArgs, "select">
  ): Promise<number> {
    return this.prisma.assignment.count(args);
  }

  async assignments<T extends Prisma.AssignmentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AssignmentFindManyArgs>
  ): Promise<PrismaAssignment[]> {
    return this.prisma.assignment.findMany<Prisma.AssignmentFindManyArgs>(args);
  }
  async assignment<T extends Prisma.AssignmentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AssignmentFindUniqueArgs>
  ): Promise<PrismaAssignment | null> {
    return this.prisma.assignment.findUnique(args);
  }
  async createAssignment<T extends Prisma.AssignmentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AssignmentCreateArgs>
  ): Promise<PrismaAssignment> {
    return this.prisma.assignment.create<T>(args);
  }
  async updateAssignment<T extends Prisma.AssignmentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AssignmentUpdateArgs>
  ): Promise<PrismaAssignment> {
    return this.prisma.assignment.update<T>(args);
  }
  async deleteAssignment<T extends Prisma.AssignmentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AssignmentDeleteArgs>
  ): Promise<PrismaAssignment> {
    return this.prisma.assignment.delete(args);
  }
}
