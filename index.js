class Storage {
  get length() {
    return Object.keys(this).length;
  }

  key(index) {
    const key = Object.keys(this)[index];
    return this[key] || null;
  }

  getItem(key) {
    return this[key] || null;
  }

  setItem(key, value) {
    this[key] = String(value);
  }

  removeItem(key) {
    delete this[key];
  }

  clear() {
    Object.keys(this).forEach(key => this.removeItem(key));
  }
}

module.exports = new Storage();
