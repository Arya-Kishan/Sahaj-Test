import axiosInstance from "./_axios";


export const getlastMonthData = async () =>{
    try {
        const res = await axiosInstance.get(`/api/sebi/previousmonth`)
        return { res: res, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}

export const getmonthTrendData = async () =>{
    try {
        const res = await axiosInstance.get(`/api/sebi/monthtrends`)
        return { res: res, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}

export const getyearTrendData = async () =>{
    try {
        const res = await axiosInstance.get(`/api/sebi/yeartrend`)
        return { res: res, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}

export const getannualTrendData = async () =>{
    try {
        const res = await axiosInstance.get(`/api/sebi/annual`)
        return { res: res, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}

export const getcontentData = async () =>{
   try {
       const res = await axiosInstance.get(`/api/sebi/content`)
       return { res: res, err: null }
    } catch (error) {
       return { err: error, res: null }
    }
}