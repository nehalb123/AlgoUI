import * as types from '../../constants/ActionTypes';
import Problem from '../domain/Problem';

export interface EditorState {
  sourceCode: string | null;
  submissionId: string | null;
}

interface EditorAction {
  type: string;
  sourceCode?: string;
  submissionId?: string;
}

export function editor(
  state: EditorState = {
    sourceCode: null,
    submissionId: null,
  },
  action: EditorAction,
): EditorState {
  switch (action.type) {
    case types.CHANGE_SOURCE_CODE:
      return Object.assign({}, state, {
        sourceCode: action.sourceCode,
      });

    case types.SET_CURRENT_PROBLEM:
    case types.PROBLEM_REFRESH:
      return Object.assign({}, state, {
        sourceCode: null,
        submissionId: null,
      });

    case types.SUBMISSION_PUBLISHED:
      return Object.assign({}, state, {
        submissionId: action.submissionId,
      });

    default:
      return state;
  }
}

export interface ProblemsState {
  items: Problem[];
  currentProblemId: string | null;
  difficultyFilter: number;
  doneProblemsFilter: boolean;
}

interface ProblemsAction {
  type: string;
  problems?: Problem[];
  problemId?: string;
  level?: number;
  hideDoneProblems?: boolean;
}

export function problems(
  state: ProblemsState = {
    items: [],
    currentProblemId: null,
    difficultyFilter: 0,
    doneProblemsFilter: false,
  },
  action: ProblemsAction,
): ProblemsState {
  switch (action.type) {
    case types.FETCH_PROBLEMS_SUCCESS:
      return Object.assign({}, state, {
        items: action.problems,
      });

    case types.SET_CURRENT_PROBLEM:
      return Object.assign({}, state, {
        currentProblemId: action.problemId,
      });

    case types.SET_PROBLEMS_DIFFICULTY_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        difficultyFilter: action.level,
      });

    case types.HIDE_DONE_PROBLEMS:
      return Object.assign({}, state, {
        doneProblemsFilter: action.hideDoneProblems,
      });

    default:
      return state;
  }
}
