export const generateId = () =>
  `q${Date.now()}${Math.random().toString(36).substring(2, 11)}`;

export const QUESTION_TYPES = {
  TEXT: 'text',
  MULTIPLE_CHOICE: 'multiple-choice',
  YES_NO: 'yes-no',
  RATING: 'rating',
};

export const QUESTION_TYPE_LABELS = {
  [QUESTION_TYPES.TEXT]: 'Text Question',
  [QUESTION_TYPES.MULTIPLE_CHOICE]: 'Multiple Choice',
  [QUESTION_TYPES.YES_NO]: 'Yes/No',
  [QUESTION_TYPES.RATING]: 'Rating',
};

export const DEFAULT_MULTIPLE_CHOICE_OPTIONS = ['Option A'];

const createNewQuestion = (payload, questionsLength) => ({
  id: generateId(),
  type: payload.type || QUESTION_TYPES.TEXT,
  question: payload.question || 'New Question',
  required: true,
  order: questionsLength,
  options:
    payload.options ||
    (payload.type === QUESTION_TYPES.MULTIPLE_CHOICE
      ? DEFAULT_MULTIPLE_CHOICE_OPTIONS
      : []),
});

// ⭐⭐⭐ THIS IS THE IMPORTANT PART — THE EXPORT ⭐⭐⭐
export function surveyReducer(state, action) {
  switch (action.type) {
    case 'ADD_QUESTION':
      return {
        ...state,
        questions: [
          ...state.questions,
          createNewQuestion(action.payload, state.questions.length),
        ],
        survey: {
          ...state.survey,
          lastModified: new Date().toISOString().split('T')[0],
        },
      };

    case 'ADD_OPTION':
      return {
        ...state,
        questions: state.questions.map((q) =>
          q.id === action.payload.questionId
            ? { ...q, options: [...q.options, action.payload.option] }
            : q
        ),
      };

    case 'SET_EDITING_QUESTION':
      return {
        ...state,
        ui: {
          ...state.ui,
          editingQuestionId: action.payload.questionId,
        },
      };

    case 'UPDATE_SURVEY_TITLE':
      return {
        ...state,
        survey: {
          ...state.survey,
          title: action.payload.title,
          lastModified: new Date().toISOString().split('T')[0],
        },
      };

    case 'TOGGLE_PREVIEW_MODE':
      return {
        ...state,
        ui: {
          ...state.ui,
          isPreviewMode: !state.ui.isPreviewMode,
          editingQuestionId: null,
        },
      };

    case 'UPDATE_QUESTION_TEXT': {
      const { id, newText } = action.payload;

      return {
        ...state,
        questions: state.questions.map((q) =>
          q.id === id ? { ...q, question: newText } : q
        ),
        ui: {
          ...state.ui,
          editingQuestionId: null,
        },
      };
    }

    case 'DELETE_QUESTION': {
      const { id } = action.payload;

      return {
        ...state,
        questions: state.questions.filter((q) => q.id !== id),
        ui: {
          ...state.ui,
          editingQuestionId:
            state.ui.editingQuestionId === id
              ? null
              : state.ui.editingQuestionId,
        },
      };
    }

    case 'ADD_OPTION_TO_QUESTION': {
      const { questionId, optionText } = action.payload;

      return {
        ...state,
        questions: state.questions.map((q) =>
          q.id === questionId
            ? { ...q, options: [...q.options, optionText] }
            : q
        ),
      };
    }

    case 'UPDATE_OPTION_TEXT': {
      const { questionId, optionIndex, newText } = action.payload;

      return {
        ...state,
        questions: state.questions.map((q) =>
          q.id === questionId
            ? {
                ...q,
                options: q.options.map((opt, i) =>
                  i === optionIndex ? newText : opt
                ),
              }
            : q
        ),
      };
    }

    case 'DELETE_OPTION_FROM_QUESTION': {
      const { questionId, optionIndex } = action.payload;

      return {
        ...state,
        questions: state.questions.map((q) => {
          if (q.id !== questionId) return q;

          if (q.options.length <= 2) return q;

          return {
            ...q,
            options: q.options.filter((_, i) => i !== optionIndex),
          };
        }),
      };
    }

    default:
      return state;
  }
}
