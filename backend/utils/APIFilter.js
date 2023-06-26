class APIFilters {
    constructor(query, querystr) {
        this.query = query
        this.querystr = querystr
    }
    search() {   //method to apply search on database
        const keyword = this.querystr.keyword ? {  //taking in querystring from http request and creating a keyword obeject from it based on MongoDb style query
            name: {
                $regex: this.querystr.keyword, //patern matching
                $options: 'i', //for case insensitivity
            }
        } : {}
        console.log(keyword);
        this.query = this.query.find({ ...keyword })  //spreading keyword object to find() method 
        return this;
    }

    filter() {
        const queryCopy = { ...this.querystr };

        const removeFields = ["keyword", "page"];
        removeFields.forEach((el) => delete queryCopy[el]);

        let output = {};
        let prop = "";

        for (let key in queryCopy) {
            if (!key.match(/\b(gt|gte|lt|lte)/)) {
                output[key] = queryCopy[key];
            } else {
                prop = key.split("[")[0];

                let operator = key.match(/\[(.*)\]/)[1];

                if (!output[prop]) {
                    output[prop] = {};
                }

                output[prop][`$${operator}`] = queryCopy[key];
            }
        }
        // { price: { $gte: 100, $lte: 1000 } }

        this.query = this.query.find(output);
        return this;
    }
    pagination(resPerPage){
        const currentPage=Number(this.querystr.page) || 1
        const skip=resPerPage*(currentPage - 1)
        this.query = this.query.limit(resPerPage).skip(skip)
        return this;
    }
}

export default APIFilters