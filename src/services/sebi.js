import axiosInstance from "./_axios";


export const getlastMonthData = async () =>{
    try {
        const res = await axiosInstance.get(`/sebi/previousmonth`)
        return { res: res, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}

export const getmonthTrendData = async () =>{
    try {
        const res = await axiosInstance.get(`/sebi/monthtrends`)
        return { res: res, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}

export const getyearTrendData = async () =>{
    try {
        const res = await axiosInstance.get(`/sebi/yeartrend`)
        return { res: res, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}

export const getannualTrendData = async () =>{
    try {
        const res = await axiosInstance.get(`/sebi/annual`)
        return { res: res, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}

export const getcontentData = async () =>{
   try {
       const res = await axiosInstance.get(`/sebi/content`)
       return { res: res, err: null }
    } catch (error) {
       return { err: error, res: null }
    }
}

export const getTableColumnData = async () =>{
   try {
       const res = await axiosInstance.get(`/sebi/columns`)
       return { res: res, err: null }
    } catch (error) {
       return { err: error, res: null }
    }
}