#!/usr/bin/env python

import os

def walk(path='.', depth=None):
    if depth and depth == 1:
      for filename in listdir(path):
        yield filename
    else:
      top_pathlen = len(path) + len(os.path.sep)
      for dirpath, dirnames, filenames in os.walk(path):
        dirlevel = dirpath[top_pathlen:].count(os.path.sep)
        if depth and dirlevel >= depth:
          dirnames[:] = []
        else:
          for filename in filenames:
            yield os.path.join(dirpath, filename)

def generate(root, output='index.md'):
    output = open(output,'w')
    output.write('# Temario\n')
    for file in walk(root, depth=3):
      if file.endswith('script.md'):
        with open(file) as f:
          content = f.readlines()
          for line in content:
            if line.startswith('#'):
              title = line.replace("#", "").strip()
              href = title.replace(" ", "-").lower()
              if line.count('#') == 1:
                output.write("\n" + line.replace("#", "###"))
              else:
                output.write("  " * (line.count("#")-1) + "* [" + title + "](" + file + "#" + href + ")\n")
    output.close()
    print 'El temario fue creado correctamente'

generate('./clases', 'temario.md')
