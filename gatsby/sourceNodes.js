/* eslint-disable no-param-reassign */
import { getRecruiteeData } from './helpers/recruitee';

export default async function ({ actions, createNodeId, createContentDigest }) {
  await getRecruiteeData(actions, createNodeId, createContentDigest);
}
