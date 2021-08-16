import { normalize, schema } from 'normalizr'

const course = new schema.Entity('courses')
export default coursesNormalizer = data => normalize(data, [course])