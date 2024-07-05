
import React from 'react' 
import { render, screen } from '@testing-library/react'
import { it, expect, describe } from 'vitest'
import ArticleCard from '../../src/components/ArticleCard'
import { Article } from '../../src/pages/Articles'

describe('Article Card', () => {
    let article = {
        "id": 900,
        "tags": [
          {
            "id": 11,
            "label": "Naruto",
            "value": "Naruto"
          }
        ],
        "userId": "Uchiha Madara",
        "title": "Reality",
        "dateOfPublication": "07/07/2024",
        "body": "Wake up to reality. Nothing ever goes as planned in this accursed world. The longer you live, the more you realize that the only things that truly exist in this reality are merely pain, suffering, and futility."
      }

    it('should display article content', () => {
        render(<ArticleCard article={article} onOpen={function (): void {
            throw new Error('Function not implemented.')
        } } onOpenEdit={function (): void {
            throw new Error('Function not implemented.')
        } } setSelectedArticle={function (value: React.SetStateAction<Article | null>): void {
            throw new Error('Function not implemented.')
        } }/>)

        const articleContent = screen.getByTestId('article-content').textContent
        screen.debug()
        expect(articleContent).toEqual(article.body)
    })
})