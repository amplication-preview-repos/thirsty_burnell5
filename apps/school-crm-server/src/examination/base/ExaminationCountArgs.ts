/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ExaminationWhereInput } from "./ExaminationWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ExaminationCountArgs {
  @ApiProperty({
    required: false,
    type: () => ExaminationWhereInput,
  })
  @Field(() => ExaminationWhereInput, { nullable: true })
  @Type(() => ExaminationWhereInput)
  where?: ExaminationWhereInput;
}

export { ExaminationCountArgs as ExaminationCountArgs };