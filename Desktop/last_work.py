import time
import tkinter as tk

window = tk.Tk()
#photo=tk.PhotoImage(file="ubuntu.png")
#window.iconphoto(False, photo)
window.config(bg='lightcyan')
window.title('My Tkinter')
window.geometry("500x250+0+0")
window.resizable(True, True)

switch = 1
width = 3
points = []
coor = [None, None, None, None]
binder = {
	'end': '',
	'draw': '',
	'begin': ''
}


ctx = tk.Canvas(window, height=250, width=500, bg='white')
ctx.pack()

def begin(event):
	try:
		window.unbind('<ButtonPress>', binder[begin])
	except:
		pass
	binder[draw] = window.bind('<Motion>', draw)
	binder[end] = window.bind('<ButtonRelease>', end)

def end(event):
	window.unbind('<ButtonRelease>', binder[end])
	window.unbind('<Motion>', binder[draw])
	binder[begin] = window.bind('<ButtonPress>', begin)
	coor[0] = None
	coor[1] = None
	coor[2] = None
	coor[3] = None

def draw(event):
	points.append(event.x)
	points.append(event.y)
	ctx.create_polygon(points, fill='', outline='black')
window.bind('<Button-1>', begin)

window.mainloop()
