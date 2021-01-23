export class RefUtils {

  static notNull(ref: React.RefObject<HTMLElement> | null): ref is React.RefObject<HTMLElement>  {
    if(ref === null || ref.current === null || ref.current === undefined) {
      return false;
    }
    
    return true;
  }
}