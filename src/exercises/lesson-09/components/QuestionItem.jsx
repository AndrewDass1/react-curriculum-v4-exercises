import { useContext, useState } from 'react';
import { SurveyContext } from '../SurveyContext';
import { QUESTION_TYPES } from '../surveyReducer';
import styles from '../StudentWork.module.css';

export function QuestionItem({ question }) {
  const { state, dispatch } = useContext(SurveyContext);
  const isEditing = state.ui.editingQuestionId === question.id;

  const [workingText, setWorkingText] = useState(question.question);
  const [optionEdits, setOptionEdits] = useState([...question.options]);

  const handleEdit = () => {
    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: { questionId: question.id },
    });
  };

  const handleCancel = () => {
    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: { questionId: null },
    });
    setWorkingText(question.question);
    setOptionEdits([...question.options]);
  };

  const handleSave = () => {
    dispatch({
      type: 'UPDATE_QUESTION_TEXT',
      payload: { id: question.id, newText: workingText },
    });
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this question?')) {
      dispatch({
        type: 'DELETE_QUESTION',
        payload: { id: question.id },
      });
    }
  };

  const saveOption = (index) => {
    dispatch({
      type: 'UPDATE_OPTION_TEXT',
      payload: {
        questionId: question.id,
        optionIndex: index,
        newText: optionEdits[index],
      },
    });
  };

  const deleteOption = (index) => {
    dispatch({
      type: 'DELETE_OPTION_FROM_QUESTION',
      payload: { questionId: question.id, optionIndex: index },
    });
  };

  const addOption = () => {
    const text = prompt('Enter new option text:');
    if (text && text.trim()) {
      dispatch({
        type: 'ADD_OPTION_TO_QUESTION',
        payload: { questionId: question.id, optionText: text.trim() },
      });
    }
  };

  return (
    <div className={styles['question-item']}>
      <div className={styles['question-header']}>
        <span className={styles['question-type']}>
          Question Type:{' '}
          {question.type
            .split('-')
            .map((w) => w[0].toUpperCase() + w.slice(1))
            .join('-')}
        </span>

        <div className={styles['question-actions']}>
          {!isEditing ? (
            <button className={styles['edit-btn']} onClick={handleEdit}>
              Edit
            </button>
          ) : (
            <button className={styles['cancel-btn']} onClick={handleCancel}>
              Cancel
            </button>
          )}

          <button className={styles['delete-btn']} onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>

      {isEditing ? (
        <div className={styles['question-content']}>
          <input
            type="text"
            value={workingText}
            onChange={(e) => setWorkingText(e.target.value)}
            className={styles['edit-input']}
          />
          <button className={styles['save-btn']} onClick={handleSave}>
            Save Question
          </button>

          {question.type === QUESTION_TYPES.MULTIPLE_CHOICE && (
            <div className={styles['options-section']}>
              <h4>Edit Options:</h4>
              {question.options.map((opt, index) => (
                <div key={index} className={styles['option-edit-row']}>
                  <input
                    type="text"
                    value={optionEdits[index]}
                    onChange={(e) => {
                      const updated = [...optionEdits];
                      updated[index] = e.target.value;
                      setOptionEdits(updated);
                    }}
                    className={styles['option-input']}
                  />
                  <button
                    className={styles['save-option-btn']}
                    onClick={() => saveOption(index)}
                  >
                    Save
                  </button>
                  <button
                    className={styles['delete-option-btn']}
                    disabled={question.options.length <= 2}
                    onClick={() => deleteOption(index)}
                  >
                    Delete
                  </button>
                </div>
              ))}
              <button className={styles['add-option-btn']} onClick={addOption}>
                + Add Option
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className={styles['question-content']}>
          <h3>{question.question}</h3>
          {question.type === QUESTION_TYPES.MULTIPLE_CHOICE && (
            <div className={styles['options-section']}>
              <h4>Answer Options:</h4>
              <ul>
                {question.options.map((option, index) => (
                  <li key={index} className={styles['option-item']}>
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
