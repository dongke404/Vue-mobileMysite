import {request} from "./request"

const baseurl="/api"
//获取新闻
export const reqNews =() =>request(baseurl+'/reqNews')
//获取帖子
export const reqTopic= (page,pageNum) =>request({url:baseurl+'/reqtopic',params:{page,pageNum}});

//获取音乐top
export const reqMusic=(idx)=>request({url:'/top/list',params:{idx}})

//获取小说列表
export const reqStoryTypeList=()=>request(baseurl+"/storyTypeList")

//获取小说页小说(如果stype=''  则获取全部)
export const reqStorys=(stype="")=>request({url:baseurl+'/story',params:{stype}})

//获取图片类型列表
export const reqImagesTypes=()=>request({url:baseurl+"/imagesTypes"})

//获取图片
export const reqImages=(typeId,curPage)=>request({url:baseurl+"/imagesInfo",params:{typeId,curPage}})

//获取电影列表
export const reqMovies=()=>request({url:baseurl+"/reqMovies"})