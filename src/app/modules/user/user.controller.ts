import { Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';

// const createStudent: RequestHandler = catchAsync(
//   async (req: Request, res: Response) => {
//     const { student, ...userData } = req.body;
//     const result = await UserService.createStudent(student, userData);

//     sendResponse<IUser>(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: 'Student created successfully!',
//       data: result,
//     });
//   }
// );

// const createFaculy: RequestHandler = catchAsync(
//   async (req: Request, res: Response) => {
//     const { faculty, ...userData } = req.body;
//     const result = await UserService.createFaculty(faculty, userData);

//     sendResponse<IUser>(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: 'Faculty created successfully!',
//       data: result,
//     });
//   }
// );

// const createAdmin: RequestHandler = catchAsync(
//   async (req: Request, res: Response) => {
//     const { admin, ...userData } = req.body;
//     const result = await UserService.createAdmin(admin, userData);

//     sendResponse<IUser>(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: 'Admin created successfully!',
//       data: result,
//     });
//   }
// );

const init : RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Admin created successfully!',
      data: "There is no data",
    })
  }
)


export const UserController = {
  init,
  // createStudent,
  // createFaculy,
  // createAdmin,
};
