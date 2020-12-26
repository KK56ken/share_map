FROM python:3.7

RUN pip install folium
RUN pip install tornado

CMD ["python","server.py"]