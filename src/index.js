//import modules here 
import './style.css';
import createTemplate from './createTemplate';
import insertItems from './createMenu';
import getMenuItems from './menuItems';
import removeElementsFromDefined from './removeItems';

createTemplate();
const items = getMenuItems();
insertItems(items);