class PagesController < ApplicationController
  def home
    api_key_news = Rails.application.secrets.news_api_key
    url_news = "https://newsapi.org/v2/everything?q=(flights)&apiKey=#{api_key_news}"
    results_news = HTTParty.get( url_news )
    @results_news = results_news
    # raise "hell"
  end
end
