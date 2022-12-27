import {definePreview} from "next-sanity/preview"
import {projectId, dataset} from './sanity.client'

function onPublicAccessOnly(){
    throw new Error("Unable to load previez")
}

if(!projectId || !dataset){
    throw new Error("No project ID or Dataset ID")
}
export const usePreview = definePreview({projectId, dataset, onPublicAccessOnly})