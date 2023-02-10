import  sanityClient from "@sanity/client";

import createImageUrlBuilder from '@sanity/image-url'
export const client=sanityClient({
    projectId:'v0vdod6t',
    dataset:'production',
    apiVersion:'2023-02-09',
    useCdn:true,
    token:'skrhxTXvl8hkWO47bLFCvqghwThbYGGjDClVGN3nxJPMQejoosbtHtCeAXmS8lUEJha24fgwfLvwzc71SsOEBsFWFjuAyV8wqMxFH3LaRkwfC00VpA7klcEHmxXEsIDyfdPNTrrzwOHGhuWfwagh1MwL4ZppHibdLn6TlpIhPOc5bRZ7BUXV'

})
const builder=createImageUrlBuilder(client);
export const urlFor=(source)=>builder.image(source);