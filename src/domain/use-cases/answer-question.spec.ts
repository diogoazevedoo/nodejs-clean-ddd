import { AnswerQuestionUseCase } from './answer-question'
import type { AnswersRepository } from '../repositories/answers-repository'
import type { Answer } from '../entities/answer'

const fakeAnswersRepository: AnswersRepository = {
  create: async (answer: Answer) => {},
}

test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

  const answer = await answerQuestion.execute({
    instructorId: '1',
    questionId: '1',
    content: 'New response',
  })

  expect(answer.content).toEqual('New response')
})
