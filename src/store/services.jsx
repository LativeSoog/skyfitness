import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const COURSE_TAG = { type: 'Courses', id: 'LIST' }
export const coursesApi = createApi({
  reducerPath: 'coursesApi',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://skyfitnesspro-workout-default-rtdb.europe-west1.firebasedatabase.app',
  }),
  endpoints: (builder) => ({
    getAllCourses: builder.query({
      query: () => ({
        url: '/courses.json',
      }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: COURSE_TAG.type, id })),
        COURSE_TAG,
      ],
    }),
    getCourses: builder.query({
      query: ({ id }) => ({
        url: `/courses/${id}.json`,
      }),
      providesTags: (result = []) => [
        ...(Object.values(result)
          ? result.map(({ id }) => ({ type: COURSE_TAG.type, id }))
          : []),
        COURSE_TAG,
      ],
    }),
  }),
})

export const { useGetAllCourses, useGetCourses } = coursesApi
