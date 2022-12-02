import tkinter as tk

width = '500'
height = '250'

window = tk.Tk()
#photo=tk.PhotoImage(file="ubuntu.png")
#window.iconphoto(False, photo)
window.config(bg='lightcyan')
window.title('PyDepict')
window.geometry(width+"x"+height+"+0+0")
window.resizable(True, True)

ctx = tk.Canvas(window, width=500, height=250, bg='white')
canva = []
ids = []
def download():
	for column in range(int(height)):
		canva.append([])
		last_append = canva[len(canva)-1]
		for row in range(int(width)):
			last_append.append('white')
def depict():
	icolumn = 0
	for column in canva:
		icolumn += 1
		ids.append([])
		last_append = ids[len(ids)-1]
		ipixel = 0
		for pixel in column:
			ctx.create_oval(ipixel, icolumn, ipixel, icolumn, fill=pixel, outline=pixel)
			ipixel += 1
download()
depict()
ctx.pack()
window.mainloop()
