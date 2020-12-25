import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer VFez5h65fnn6HVxEZV0RyTnqT-UIaRYH6dcNZxllJzDtpcGjv8x3Hz7Mp6OTRZdajx90YcaevlixzZSoLhEhLdnwxqJWsNp4_jVxRzSybjTxlDMYZaoDnSdLsfTpXXYx",
  },
});
