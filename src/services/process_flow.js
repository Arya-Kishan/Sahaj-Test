
import axiosInstance from "./_axios";


export const getProcessFlowData = async () =>{
    try {
        const res = await axiosInstance.get(`/process/getprocesscontent`)
        console.log("the p",res.data)
        return { res: res.data, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}