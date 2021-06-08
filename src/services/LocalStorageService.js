class LocalStorageService {
  ls = window.localStorage;

  setItem(key, value) {
    this.ls.setItem(key, value);
    return true;
  }

  getItem(key) {
    let value = this.ls.getItem(key);
    try {
      value;
    } catch (e) {
      return null;
    }
  }
}

export default new LocalStorageService();
