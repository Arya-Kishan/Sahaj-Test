
import axiosInstance from "./_axios";


export const getProcessFlowData = async () =>{
    try {
        const res = await axiosInstance.get(`/api/process/getprocesscontent`)
        return { res: res.data, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}