# import os
# from PIL import Image, ImageDraw

# im = Image.new('RGB', ('what?'), (...))
# draw = ImageDraw.Draw(im)

canva = {'1': 'white', '2': 'white', '3': 'white'}

def what():
	command = input('Input command: ')
	if command == 'canvas':
		pixel = input('Adress: ')
		canvas(pixel)
	elif command == 'svg':
		pixel = input('Adress: ')
		svg(pixel)
	elif command == 'pixel':
		adress = input('Which pixel you want get: ')
		print(canva[adress])
		what()
	else:
		print('CommandError: Unexpected defined command', command)
		what()
def canvas(px):
	try:
		canva[px] = input('Which color: ')
		print('pixel', px, 'acsess paint in', canva[px])
	except KeyError:
		print('AdressError: Unexpected defined adress', px)
	what()
def svg(px):
	try:
		canva[px] = input('Which color: ')
		print('pixel', px, 'acsess paint in', canva[px])
	except KeyError:
		print('AdressError: Unexpected defined adress', px)
	what()
what();
