import Url from '../models/urlModel.js';
import { nanoid } from 'nanoid';

export async function createUrl(req, res) {
  const { slug, originalUrl } = req.body;
  const finalSlug = slug || nanoid(6);
  try {
    const exists = await Url.findOne({where:{ slug: finalSlug }});
    if(exists) return
    const newUrl = await Url.create({ slug: finalSlug, originalUrl });
    res.status(201).json(newUrl);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar URL' });
  }
}

export async function redirectUrl(req, res) {
  const { slug } = req.params;
  try {
    const found = await Url.findOne({ where: { slug } });
    if (!found) return res.status(404).send('URL não encontrada');
    res.redirect(found.originalUrl);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao redirecionar' });
  }
}
