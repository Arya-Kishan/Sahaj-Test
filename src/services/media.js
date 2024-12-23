import axiosInstance from "./_axios";


export const getpressCoverageData = async (bodyData) =>{
    try {
        const res = await axiosInstance.post(`/api/presscoverage/getall`,bodyData)
       
        return { res: res, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}

export const getpodcastData = async (bodyData) =>{
    try {
        const res = await axiosInstance.post(`/api/podcast/getallpodcast`,bodyData)
     
        return { res: res, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}

export const getvideoChannelData = async (bodyData) =>{
    try {
        const res = await axiosInstance.post(`/api/videochannel/getallvediochannels`,bodyData)
        return { res: res, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}

export const getblogsData = async (bodyData) =>{
    try {
        const res = await axiosInstance.post(`/api/blog/getallblogs`,bodyData)
        return { res: res, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}

export const getcustomersInMediaData = async (bodyData) =>{
   try {
       const res = await axiosInstance.post(`/api/media/getallmedias`,bodyData)
       return { res: res, err: null }
    } catch (error) {
       return { err: error, res: null }
    }
}
export const gettopicData = async () =>{
    try {
        const res = await axiosInstance.get(`/api/topic/alltopics`)
        return { res: res.data, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}