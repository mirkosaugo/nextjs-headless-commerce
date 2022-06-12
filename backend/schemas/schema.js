// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import category from './category'
import product from './product'
import designer from './designer'
import productVariant from './productVariant'

import localeString from './locale/String'
import localeText from './locale/Text'
import localeBlockContent from './locale/BlockContent'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    product,
    designer,
    category,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    localeText,
    localeBlockContent,
    localeString,
    productVariant,
  ]),
})

// TEST QUERY:
// *[_id == "35f78f0b-8938-412d-aae0-80937ee4a744"]{"blurb": coalesce(blurb.fi, blurb.en)}[0]

// *[_id == "35f78f0b-8938-412d-aae0-80937ee4a744"][0]{..., categories[]->{title}, defaultProductVariant{images[]{asset->{url}},price}}