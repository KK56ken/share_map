FROM python:3.7

RUN pip install folium
RUN pip install tornado

ADD . /app

WORKDIR /app/app

CMD ["python","server.py"]