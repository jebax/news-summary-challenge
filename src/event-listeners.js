import { HeadlinesController } from './controllers/headlines-controller.js'
import { ArticleList } from './article-list.js'

let loadSummaryOnClick = (summaryController, apiController) => {
  window.addEventListener('hashchange', () => {
    const id = window.location.hash.split('/')[1]
    summaryController.findArticleByID(id)
    apiController.initializeSummary(summaryController.getSummaryURL(), summaryController)
  })
}

let loadHeadlinesOnHomeClick = apiController => {
  document.getElementById('home').addEventListener('click', () => {
    const headlinesController = new HeadlinesController(new ArticleList())
    apiController.initializeHeadlines(headlinesController)
  })
}

export { loadSummaryOnClick, loadHeadlinesOnHomeClick }
