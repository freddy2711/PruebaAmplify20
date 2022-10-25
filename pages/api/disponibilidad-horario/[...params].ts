import { NextApiRequest, NextApiResponse } from "next"
import { axiosfetchPrivate } from "../../../config/axios"
import { apiPath } from "../../../consts/path"

type Data = {}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { params } = req.query

    switch (params[0]) {
        case 'HeadquartersBanners':
            try {
                const URL = apiPath.disponibilidadHorario.PATH_GetHeadquartersBanners(params[1])
                const { data } = await axiosfetchPrivate(URL)
                const result = data.detail
                res.status(200).json(result)
              } catch (error) {
                console.log(error)
              }
            break;
        case 'SemesterUnitBusinessCode':
            try {
                const URL = apiPath.disponibilidadHorario.PATH_GetSemesterUnitBusinessCode(params[1])
                const { data } = await axiosfetchPrivate(URL)
                const result = data.detail
                res.status(200).json(result)
                } catch (error) {
                console.log(error)
                }
            break;
        case 'TeacherAvailability':
            try {
                const URL = apiPath.disponibilidadHorario.PATH_GetTeacherAvailability(params[1],params[2],params[3])
                const { data } = await axiosfetchPrivate(URL)
                const result = data.detail
                res.status(200).json(result)
                } catch (error) {
                console.log(error)
                }
            break;
        case 'CrudAvailability':
            try {
                const item = req.body
                const URL = apiPath.disponibilidadHorario.PATH_PostCrudAvailability
                const { data } = await axiosfetchPrivate.post(URL,item)
                const result = data.detail
                res.status(200).json(result)
                } catch (error) {
                console.log(error)
                }
            break;
        default:
            break;
    }

}
  
export default handler