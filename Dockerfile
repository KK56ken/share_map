FROM python:3.7

RUN pip3 install \
        folium \
        tornado \
        mysqlclient 

CMD ["python","server.py"]