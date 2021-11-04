const fs = wx.getFileSystemManager();

module.exports = {
  readSync(fd, buffer, offset, length, position) {
    const result = fs.readSync({
      fd,
      arrayBuffer: buffer.buffer,
      offset: buffer.byteOffset + offset,
      length,
      position
    })
    return result.bytesRead
  },

  fstatSync(fd) {
    return fs.fstatSync({
      fd
    })
  },

  ftruncateSync(fd, length) {
    return fs.ftruncateSync({
      fd,
      length
    })
  },

  writeSync(fd, buffer, offset, length, position) {
    return fs.writeSync({
      fd,
      data: buffer.buffer,
      offset: buffer.byteOffset + offset,
      length,
      position
    })
  }
}