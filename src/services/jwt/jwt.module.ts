// import { Module } from '@nestjs/common';

// @Module({
//   imports: [
//     JwtModule.registerAsync({
//         imports: [ConfigModule],
//         useFactory: async (configService: ConfigService) => ({
//           secret: configService.get<string>(
//             ConfigValues.USER_ACCESS_TOKEN_SECRET,
//           ),
//         }),
//         inject: [ConfigService],
//       }),
//     ],
//   ],
//   providers: [],
//   exports: [],
// })
// export class JwtModule {}
