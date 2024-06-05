import { Module } from "@nestjs/common";
import { StudentModule } from "./student/student.module";
import { StaffModule } from "./staff/staff.module";
import { ParentModule } from "./parent/parent.module";
import { AdmissionModule } from "./admission/admission.module";
import { AcademicCalendarModule } from "./academicCalendar/academicCalendar.module";
import { ResultModule } from "./result/result.module";
import { FinanceModule } from "./finance/finance.module";
import { AssignmentModule } from "./assignment/assignment.module";
import { ExaminationModule } from "./examination/examination.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    StudentModule,
    StaffModule,
    ParentModule,
    AdmissionModule,
    AcademicCalendarModule,
    ResultModule,
    FinanceModule,
    AssignmentModule,
    ExaminationModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
