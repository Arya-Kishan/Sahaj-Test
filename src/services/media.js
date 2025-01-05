import axiosInstance from "./_axios";


export const getpressCoverageData = async (bodyData) =>{
    try {
        const res = await axiosInstance.post(`/presscoverage/getall`,bodyData)
       
        return { res: res, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}

export const getpodcastData = async (bodyData) =>{
    try {
        const res = await axiosInstance.post(`/podcast/getallpodcast`,bodyData)
     
        return { res: res, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}

export const getvideoChannelData = async (bodyData) =>{
    try {
        const res = await axiosInstance.post(`/videochannel/getallvediochannels`,bodyData)
        return { res: res, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}

export const getblogsData = async (bodyData) =>{
    try {
        const res = await axiosInstance.post(`/blog/getallblogs`,bodyData)
        return { res: res, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}

export const getcustomersInMediaData = async (bodyData) =>{
   try {
       const res = await axiosInstance.post(`/media/getallmedias`,bodyData)
       return { res: res, err: null }
    } catch (error) {
       return { err: error, res: null }
    }
}
export const gettopicData = async () =>{
    try {
        const res = await axiosInstance.get(`/topic/alltopics`)
        return { res: res.data, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}