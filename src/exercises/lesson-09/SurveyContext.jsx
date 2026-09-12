import { createContext, useReducer } from 'react';
import { surveyReducer } from './surveyReducer';
import { initialSurvey } from './surveyData';

export const SurveyContext = createContext();

const initialState = {
  ...initialSurvey,
  ui: {
    editingQuestionId: null,
    isPreviewMode: false,
  },
};

export function SurveyProvider({ children }) {
  const [state, dispatch] = useReducer(surveyReducer, initialState);

  return (
    <SurveyContext.Provider value={{ state, dispatch }}>
      {children}
    </SurveyContext.Provider>
  );
}
