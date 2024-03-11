import { DELETE_PROJECTLIST, TOGGLE_CARD_COLLAPSE, TOGGLE_DROPDOWN } from '../ProjectOnGoing/constant';
import { projectondata } from '../../../../common/data/Project/projectlist';

const initialState = {
    projectList: projectondata.map(project => ({ ...project, collapse: false, dropdown: false })),
    isCardCollapsed: new Array(projectondata.length).fill(false),
    isOpenDropdown: new Array(projectondata.length).fill(false)
};

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_PROJECTLIST:
            const updatedProjectList = state.projectList.filter((project, index) => index !== action.payload);
            return {
                ...state,
                projectList: updatedProjectList,
            };
        case TOGGLE_CARD_COLLAPSE:
            return {
                ...state,
                isCardCollapsed: state.isCardCollapsed.map((collapsed, index) =>
                    index === action.payload ? !collapsed : collapsed
                ),
            };
        case TOGGLE_DROPDOWN:
            return {
                ...state,
                isOpenDropdown: state.isOpenDropdown.map((dropdown, index) =>
                    index === action.payload ? !dropdown : dropdown
                ),
            };
        default:
            return state;
    }
};

export default projectReducer;
