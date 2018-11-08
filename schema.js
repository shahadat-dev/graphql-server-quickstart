const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require('graphql')

// Hardcoded Data
const customers = [
  {
    id: '1',
    name: 'Shahadat Hossain',
    email: 'shahadat.cseru@gmail.com',
    age: 30
  },
  { id: '2', name: 'Lalon Fakir', email: 'lalon@gmail.com', age: 114 },
  {
    id: '3',
    name: 'Kazi Nazrul Islam',
    email: 'kazi.nazrul@gmail.com',
    age: 70
  },
  { id: '4', name: 'S M Sultan', email: 'sm.sultan@gmail.com', age: 60 }
]

// Customer Type
const CustomerType = new GraphQLObjectType({
  name: 'Customer',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
})

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    customer: {
      type: CustomerType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        for (let i = 0; i < customers.length; i++) {
          if (customers[i].id == args.id) {
            return customers[i]
          }
        }
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
