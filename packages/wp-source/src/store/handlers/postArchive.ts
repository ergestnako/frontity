import { Handler, PostArchiveData } from "../../types";
import { populate, getTotal, getTotalPages } from "./utils";

const postArchiveHandler: Handler = async (ctx, { name, params, page = 1 }) => {
  const state = ctx.state.source;
  const actions = ctx.actions.source;
  const effects = ctx.effects.source;

  const data = <PostArchiveData>state.data[name];

  const hasNotPage = !(data.page && data.page[page]);

  let response: Response;

  if (hasNotPage) {
    response = await effects.api.get({
      endpoint: "posts",
      params: { search: params.s, page, _embed: true }
    });

    // Add entities to the state
    const dataPage = await populate(ctx, response);

    // Add the received page of entities
    data.page = data.page || [];
    data.page[page - 1] = dataPage; // transform page number to index!!

    // Init data
    Object.assign(data, {
      type: "post",
      isArchive: true,
      isPostTypeArchive: true,
      isPostArchive: true,
      isHome: true,
      total: getTotal(response),
      totalPages: getTotalPages(response)
    });
  }
};

export default postArchiveHandler;
