import axiosInstance from "./_axios";


export const getpressCoverageData = async (bodyData) =>{
    try {
        const res = await axiosInstance.post(`/api/presscoverage/getall`,bodyData)
        console.log("the prss",res.data)
        return { res: res, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}

export const getpodcastData = async (bodyData) =>{
    try {
        const res = await axiosInstance.post(`/api/podcast/getallpodcast`,bodyData)
        console.log("the pod11",res.data)
        return { res: res, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}

export const getvideoChannelData = async (bodyData) =>{
    try {
        const res = await axiosInstance.post(`/api/videochannel/getallvediochannels`,bodyData)
        console.log("the vvvidd222",res.data)
        return { res: res, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}

export const getblogsData = async (bodyData) =>{
    try {
        const res = await axiosInstance.post(`/api/blog/getallblogs`,bodyData)
        console.log("the blogs33",res.data)
        return { res: res, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}

export const getcustomersInMediaData = async (bodyData) =>{
   try {
       const res = await axiosInstance.post(`/api/media/getallmedias`,bodyData)
       console.log("the meedia",res.data)
       return { res: res, err: null }
    } catch (error) {
       return { err: error, res: null }
    }
}
export const gettopicData = async () =>{
    try {
        const res = await axiosInstance.get(`/api/faq/getalltopics`)
        return { res: res.data, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}