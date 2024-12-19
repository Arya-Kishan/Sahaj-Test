
import axiosInstance from "./_axios";


export const getPodcastData = async () =>{
    try {
        const res = await axiosInstance.get(`/podcast/getallpodcasttags`)
        return { res: res, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}