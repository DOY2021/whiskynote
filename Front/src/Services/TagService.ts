import { TagCategory } from "../constants/TagCategory";
import { TagProp } from "../model/Tag";


class TagService{
  private tagList;
  constructor(){
    this.tagList = TagCategory;
  }

  getSpecificCategoryList(category:TagProp){
    return Object.entries(this.tagList)
      .filter(tag => tag[1] === category)
      .map(tag => tag[0]);
  }

  getTagCategory(item: string) {
    return this.tagList[item];
  }
}

export default new TagService();