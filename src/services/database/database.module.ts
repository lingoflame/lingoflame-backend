import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BaseUser, BaseUserSchema } from './schemas/base-user.schema';
import { User } from 'src/core/entities/user';
import { Admin } from 'src/core/entities/admin';
import { AdminSchema } from './schemas/admin.schema';
import { UserSchema } from './schemas/user.schema';
import { Teacher } from 'src/core/entities/teacher';
import { TeacherSchema } from './schemas/teacher.schema';
import { Class } from 'src/core/entities/class';
import { ClassSchema } from './schemas/class.schema';
import { Institute } from 'src/core/entities/institute';
import { InstituteSchema } from './schemas/institute.schema';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URL'),
      }),
      inject: [ConfigService],
      imports: [],
    }),

    MongooseModule.forFeature([
      {
        name: BaseUser.name,
        schema: BaseUserSchema,
        discriminators: [
          { name: User.name, schema: UserSchema },
          { name: Admin.name, schema: AdminSchema },
          {
            name: Teacher.name,
            schema: TeacherSchema,
          },
        ],
        collection: 'users',
      },
      { name: Class.name, schema: ClassSchema, collection: 'classes' },
      {
        name: Institute.name,
        schema: InstituteSchema,
        collection: 'institutes',
      },
    ]),
  ],
  providers: [],
  exports: [],
})
export class DatabaseModule {}
