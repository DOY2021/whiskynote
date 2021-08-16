import Palette from "../lib/css/Pallete";
import { TagCategory, Tags, TagVariant } from "../model/WhiskyNote";


class TagService{
  private tagList;
  constructor(){
    this.tagList = TagCategory;
  }

  getSpecificCategoryList(category:TagVariant){
    return Object.entries(this.tagList)
      .filter(tag => tag[1] === category)
      .map(tag => tag[0]);
  }

  getTagCategory(item: Tags) {
    return this.tagList[item];
  }

  getTagColor(category: TagVariant){
    return Palette[category];
  }
}

export default new TagService();